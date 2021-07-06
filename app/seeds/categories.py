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
    category4 = Category(
        name='book'
    )
    category5 = Category(
        name='cereal'
    )
    category6 = Category(
        name='kid friendly'
    )
    category7 = Category(
        name='cat food'
    )
    category8 = Category(
        name='instructions'
    )

    db.session.add(category1)
    db.session.add(category2)
    db.session.add(category3)
    db.session.add(category4)
    db.session.add(category5)
    db.session.add(category6)
    db.session.add(category7)
    db.session.add(category8)

    db.session.commit()

def undo_categories():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
