from .db import db
from recording_category_join import recordings_categories
from recording_comment_join import recordings_comments
from sqlalchemy import func

class Recording(db.Model):
    __tablename__ = 'recordings'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    audio = db.Column(db.LargeBinary)
    created_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=func.now())
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))
    users = db.relationship('User', back_populates='recordings')
    comments = db.relationship('Comment', secondary=recordings_comments, back_populates='recordings')
    categories = db.relationship('Category', secondary=recordings_categories, back_populates='recordings')

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'audio': self.audio,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'username': [user.username for user in self.users],
            'comment_id': [comment.id for comment in self.comments]
        }
