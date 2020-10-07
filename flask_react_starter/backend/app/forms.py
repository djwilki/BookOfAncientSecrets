from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, IntegerField
from wtforms.validators import InputRequired, Length, Email


class LoginForm(FlaskForm):
    email_or_username = StringField("Email", validators=[InputRequired("Please provide a valid email or username.")])
    password = PasswordField("Password", validators=[InputRequired("Please provide a valid password.")])

class AdventureForm(FlaskForm):
    title = StringField("Title", validators=[InputRequired("Please provide a valid title.")])
    description = StringField("Description", validators=[InputRequired("Please provide a valid description.")])
    published = BooleanField("Published", validators=[InputRequired("Please provide publication status.")])
