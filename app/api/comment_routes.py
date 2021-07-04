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
        recording_id=[]
    )
