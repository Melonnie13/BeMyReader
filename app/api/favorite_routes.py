from flask import Blueprint, jsonify, session, request
from app.models import Favorite, favorites_recordings_join, db
from flask_login import current_user, login_required

favorite_routes = Blueprint('favorites', __name__)


@favorite_routes.route('/all', methods=['GET'])
@login_required
def all_favorites():
    favorites = Favorite.query.all()
    return {favorite.id: favorite.to_dict() for favorite in favorites}
