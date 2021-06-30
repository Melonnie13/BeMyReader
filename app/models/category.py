from .db import db
from recording_category_join import recordings_categories

class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    name = db.Column(db.String(25), unique=True)
    recordings = db.relationship('Recording', secondary=recordings_categories, back_populates='categories')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name
        }
