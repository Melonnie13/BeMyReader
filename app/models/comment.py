from .db import db
from recording_comment_join import recordings_comments
from sqlalchemy import func

class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    body = db.Column(db.Text)
    created_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=func.now())
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    recording_id = db.Column(db.Integer, db.ForeignKey('recordings.id'))
    users = db.relationship('User', back_populates='comments')
    recordings = db.relationship('Recording', secondary=recordings_comments, back_populates='comments')

    def to_dict(self):
        return {
            'id': self.id,
            'body': self.body,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'user_id': self.user_id,
        }
