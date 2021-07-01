from app.models import db, Category

def seed_categories():
    category1 = Category(
        name='ingredients'
    )
    category2 = Category(
        name='newspaper'
    )
    category3 = Category(
        name='dog food'
    )

    db.session.add(category1)
    db.session.add(category2)
    db.session.add(category3)

    db.session.commit()

def undo_categories():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
