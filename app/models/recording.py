from .db import db
from sqlalchemy import func
from .favorites_recordings_join import favorites_recordings


class Recording(db.Model):
    __tablename__ = 'recordings'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text())
    audio = db.Column(db.LargeBinary())
    created_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=func.now())
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))
    users = db.relationship('User', back_populates='recordings')
    comments = db.relationship('Comment', back_populates='recordings')
    categories = db.relationship('Category', back_populates='recordings')
    favorites = db.relationship('Favorite', secondary=favorites_recordings, back_populates='recordings')

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'category': self.categories.name,
            'audio': self.audio,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            # 'username': self.users.username,
            'comment_ids': [comment.id for comment in self.comments],
            'user_id': self.users.id,
        }
