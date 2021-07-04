from flask import Blueprint, jsonify, session, request
from app.models import Comment, db
from flask_login import current_user, login_required

comment_routes = Blueprint('comments', __name__)


@comment_routes.route('/new', methods=['POST'])
@login_required
def upload_comment():
    new_comment = Comment(
        body=request.form['body'],
        user_id=current_user.id,
        recording_id=['recording']
    )
    db.session.add(new_comment)
    db.session.commit()
    return new_comment.to_dict()

# @comment_routes.route('/<int:recording_id>')
# def get_recording_comments(recording_id):
#     # print('comments from commentroutes ======================================')
#     comments = Comment.query.filter(Comment.recording_id == recording_id).all()
#     return {'comments': [comment.to_dict() for comment in comments]}


# @comment_routes.route("/delete/<int:id>", methods=["DELETE"])
# @login_required
# def delete_comment(id):
#     comment = Comment.query.get(id)
#     if not comment:
#         return jsonify('comment not found')
#     db.session.delete(comment)
#     db.session.commit()
#     return {'id': id}


# @comment_routes.route("/update/<int:id>", methods=["PUT"])
# # @login_required
# def update_comment(id):
#     print("made it here =====", request.form["comment"])
#     edit_comment = Comment.query.get(id)
#     edit_comment.comment = request.form["comment"]
#    # if not edit_comment:
#    #     return jsonify('comment not found')
#     db.session.add(edit_comment)
#     db.session.commit()
#     return edit_comment.to_dict()
