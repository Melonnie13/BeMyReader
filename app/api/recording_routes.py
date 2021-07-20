from flask import Blueprint, jsonify, session, request
from app.models import Recording, db
from flask_login import current_user, login_required
import json
from app.s3_functionality import (
    upload_file_to_s3, allowed_file, get_unique_filename, delete_file_from_s3)

recording_routes = Blueprint('recordings', __name__)

@recording_routes.route('/new-audio', methods=['POST'])
@login_required
def upload_audio():
    # print('********************THIS IS THE BLOB***************', request.form["audio"])
    if "audio" not in request.files:
        return {"errors": "audio required"}, 400

    audio = request.files["audio"]

    # print('**************AUDIO OBJECT FROM RECORDING ROUTE******************', audio.blob)

    if not allowed_file(audio.filename):
        return {"errors": "file type not permitted"}, 400

    audio.filename = get_unique_filename(audio.filename)

    upload = upload_file_to_s3(audio)

    if "url" not in upload:
        return upload, 400

    url = upload["url"]
    return {'url': url}


@recording_routes.route('/new', methods=['POST'])
@login_required
def upload_recording():

    new_recording = Recording(
        title=request.form['title'],
        description=request.form['description'],
        # audio=request.form['audio'],
        user_id=current_user.id,
        category_id=request.form['category']
    )
    print(request.form['audio'], '$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
    # print(request.form["category"], '***************************')
    # print('%%%%%%%%%%%%%%%%%%%%%%', json.loads(request.form['audio']))
    # print(request.files, '&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&request.files')
    db.session.add(new_recording)
    db.session.commit()
    return new_recording.to_dict()

@recording_routes.route('/single/<int:id>', methods=['GET'])
@login_required
def get_one_recording(id):
    recording = Recording.query.get(id)
    return recording.to_dict()


@recording_routes.route('/<int:id>', methods=['GET'])
@login_required
def get_users_recordings(id):
    recordings = Recording.query.filter(Recording.user_id == id).order_by(Recording.title.desc()).all()
    return {recording.title: recording.to_dict() for recording in recordings}


@recording_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_recording(id):
    recording = Recording.query.get(id)
    db.session.delete(recording)
    db.session.commit()
    return {'id': id}
    # return recording.to_dict()

@recording_routes.route('/all', methods=['GET'])
@login_required
def all_recordings():
    recordings = Recording.query.order_by(Recording.title.desc()).all()
    return {recording.id: recording.to_dict() for recording in recordings}


@recording_routes.route('/alphabetical', methods=['GET'])
# @login_required
def all_recordings_alphabetical():
    recordings = Recording.query.order_by(Recording.title.desc()).all()
    # print(recordings, "*******************from get all recordings order alphabetically route!!!!!!!!!!!!!!!!!!!!!")
    return {recording.title: recording.to_dict() for recording in recordings}
