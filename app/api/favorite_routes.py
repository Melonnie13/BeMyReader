from flask import Blueprint, jsonify, session, request
from app.models import Favorite, Recording, favorites_recordings_join, db
from flask_login import current_user, login_required

favorite_routes = Blueprint('favorites', __name__)


@favorite_routes.route('/all', methods=['GET'])
@login_required
def all_favorites():
    favorites = Favorite.query.order_by(Favorite.name.desc()).all()
    return {favorite.name: favorite.to_dict() for favorite in favorites}


@favorite_routes.route('/new', methods=['POST'])
@login_required
def create_favorite():
    new_favorite = Favorite(
        name=request.form['name'],
        user_id=current_user.id
    )
    db.session.add(new_favorite)
    db.session.commit()
    return new_favorite.to_dict()


@favorite_routes.route('/delete/<int:id>', methods=['DELETE'])
@login_required
def delete_favorite(id):
    favorite = Favorite.query.get(id)
    db.session.delete(favorite)
    db.session.commit()
    return {'id': id}


@favorite_routes.route('/<int:id>', methods=['GET'])
@login_required
def get_one_favorite(id):
    favorite = Favorite.query.get(id)
    return favorite.to_dict()


@favorite_routes.route('/user/<int:id>', methods=['GET'])
@login_required
def get_users_favorites(id):
    favorites = Favorite.query.filter(Favorite.user_id == id).order_by(Favorite.name.desc()).all()
    return {favorite.name: favorite.to_dict() for favorite in favorites}


@favorite_routes.route('/recording', methods=['POST'])
@login_required
def add_recording():
    recording = Recording.query.get(request.form['recording_id'])
    favorite = Favorite.query.get(request.form['favorite_id'])
    # print('+++++++++++++++++++++++++++++++++FAVORITE', favorite)
    favorite.recordings.append(recording)
    # print(favorite.recordings, '##########################################FROM ADD RECORDING TO FAVORITE LIST ROUTE^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
    db.session.add(recording)
    db.session.commit()
    return favorite.to_dict()
    # {'favorite': favorite.to_dict(), 'recording': recording.to_dict()}


@favorite_routes.route('/remove', methods=['DELETE'])
@login_required
def remove_from_favorite():
    favorite = Favorite.query.get(int(request.json['favoriteId']))
    recording = Recording.query.get(int(request.json['recordingId']))
    print('^^^^^^^^^^^^^^^^^^^^^^^^^^^$$$$$$$$$$$$$$$$$$$$$$$', recording)
    # print(recording, "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$show me this")
    favorite.recordings.remove(recording)
    db.session.commit()
    return favorite.to_dict()
