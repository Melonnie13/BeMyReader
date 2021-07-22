from flask import Blueprint, jsonify, session, request
from app.models import Category, db
from flask_login import current_user, login_required

category_routes = Blueprint('categories', __name__)


@category_routes.route('')
def get_categories():
    categories = Category.query.order_by(Category.name.desc()).all()
    # print('***********************', categories)
    return {category.name: category.to_dict() for category in categories}
