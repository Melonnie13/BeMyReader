from .db import db
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
    recordings = db.relationship('Recording', back_populates='comments')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'recording_id': self.recording_id,
            'body': self.body,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'username': self.users.username,
            'recording': self.recordings.to_dict()
        }
