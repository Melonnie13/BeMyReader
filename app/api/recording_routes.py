from flask import Blueprint, jsonify, session, request
from app.models import Recording, db
from flask_login import current_user, login_required

recording_routes = Blueprint('recordings', __name__)


@recording_routes.route('/new', methods=['POST'])
@login_required
def upload_recording():
    new_recording = Recording(
        title=request.form['title'],
        description=request.form['description'],
        audio=request.form['audio'],
        user_id=current_user.id,
        category_id=request.form['category']
    )
    # print(request.form["category"], '***************************')
    db.session.add(new_recording)
    db.session.commit()
    return new_recording.to_dict()


@recording_routes.route('/<int:id>', methods=['GET'])
@login_required
def get_one_recording(id):
    recording = Recording.query.get(id)
    return recording.to_dict()
