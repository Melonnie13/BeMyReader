from .db import db
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
    users = db.relationship("User", back_populates="recordings")
    comments = db.relationship("Comment", back_populates="recordings")

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'audio': self.audio,
            'created_at': self.created_at,
            'updated_at': self.updated_at,


        }
