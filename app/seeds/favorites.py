from app.models import db, Favorite

def seed_favorites():
    favorite1 = Favorite(
        name='demo user faves seed 1',
        user_id=1,
    )
    favorite2 = Favorite(
        name='bmr user fave for seed2',
        user_id=2
    )
    favorite3 = Favorite(
        name='mel fave for seed3',
        user_id=3
    )

    db.session.add(favorite1)
    db.session.add(favorite2)
    db.session.add(favorite3)

    db.session.commit()

def undo_favorites():
        db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
        db.session.commit()
