from flask import Blueprint, jsonify, session, request
from app.models import Comment, db
from flask_login import current_user, login_required

comment_routes = Blueprint('comments', __name__)


@comment_routes.route('/new', methods=['POST'])
@login_required
def add_recording_comment():
    new_comment = Comment(
        body=request.form['body'],
        recording_id=request.form['recording_id'],
        user_id=current_user.id
    )
    print('******************NEW COMMENT FROM COMMENT ROUTES', new_comment)
    db.session.add(new_comment)
    db.session.commit()
    return new_comment.to_dict()


@comment_routes.route('/<int:recording_id>', methods=['GET'])
def get_recording_comments(recording_id):
    comments = Comment.query.filter(Comment.recording_id == recording_id).all()
    return {comment.id: comment.to_dict() for comment in comments}


@comment_routes.route("/delete/<int:id>", methods=["DELETE"])
@login_required
def delete_comment(id):
    comment = Comment.query.get(id)
    print(comment, '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%comment from routes')
    db.session.delete(comment)
    db.session.commit()
    return {'id': id}


@comment_routes.route("/update/<int:id>", methods=["PUT"])
@login_required
def update_comment(id):
    print("made it here =====", request.form["body"])
    edit_comment = Comment.query.get(id)
    edit_comment.body = request.form["body"]
    db.session.add(edit_comment)
    db.session.commit()
    return edit_comment.to_dict()


# TO STUDY LATER!!!
# @comment_routes.route("/update/<int:id>", methods=["PATCH"])
# # @login_required
# def update_comment(id):
#     edit_comment = Comment.query.get(id)
#     body = request.get_json()["body"]
#     updated_at = request.get_json()["updated_at"]
#     edit_comment.body = body
#     edit_comment.updated_at = updated_at
#     # db.session.add(edit_comment)
#     db.session.commit()
#     return edit_comment.to_dict()
