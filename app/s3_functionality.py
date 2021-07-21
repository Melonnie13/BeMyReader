import boto3
import botocore
import os
import uuid

BUCKET_NAME = os.environ.get("S3_BUCKET")
S3_LOCATION = f"http://{BUCKET_NAME}.s3.amazonaws.com/"
ALLOWED_EXTENSIONS = {"mp4", "mp3", "wav", "mpeg", "ogg", "webm"}

s3 = boto3.client(
   "s3",
   aws_access_key_id=os.environ.get("S3_KEY"),
   aws_secret_access_key=os.environ.get("S3_SECRET")
)

s3rsrc = boto3.resource(
    "s3",
    aws_access_key_id=os.environ.get("S3_KEY"),
    aws_secret_access_key=os.environ.get("S3_SECRET")
)

# Filenames


def allowed_file(filename):
    print(filename)
    print("." in filename)
    return "." in filename and \
           filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


def get_unique_filename(filename):
    ext = filename.rsplit(".", 1)[1].lower()
    unique_filename = uuid.uuid4().hex
    return f"{unique_filename}.{ext}"

# Upload Helper


def upload_file_to_s3(file, acl="public-read"):
    print("*****made it to upload_file_to_s3 function")
    try:
        s3.upload_fileobj(
            file,
            BUCKET_NAME,
            file.filename,
            ExtraArgs={
                "ACL": acl,
                "ContentType": file.content_type
            }
        )
    except Exception as e:
        # in case  our s3 upload fails
        print("errors", str(e))
        return {"errors": str(e)}

    return {"url": f"{S3_LOCATION}{file.filename}"}

# Delete Helper


def delete_file_from_s3(filename):
    print("*****made it to delete_file_from_s3 function")
    try:
        s3.delete_object(Bucket=f"{BUCKET_NAME}", Key=f"{filename}")
    except Exception as e:
        # in case our s3 delete fails
        print("errors", str(e))
        return {"errors": str(e)}
