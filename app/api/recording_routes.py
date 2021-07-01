from flask import Blueprint, jsonify, session, request
from app.models import Recording, db
from flask_login import current_user, login_required

recording_routes = Blueprint('recordings', __name__)


@recording_routes.route('', methods=['POST'])
@login_required
def upload_recording():
    new_recording = Recording(
        title=request.form['title'],
        description=request.form['description'],
        audio=request.form['audio'],
        user_id=current_user.id,
        category_id=request.form['category']
    )
    db.session.add(new_recording)
    db.session.commit()
    print(category_id, 'from recording api post route')
    return new_recording.to_dict()
