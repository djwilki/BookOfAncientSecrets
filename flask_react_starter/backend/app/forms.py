from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, IntegerField
from wtforms.validators import InputRequired, Length, Email


class LoginForm(FlaskForm):
    email_or_username = StringField("Email", validators=[InputRequired("Please provide a valid email or username.")])
    password = PasswordField("Password", validators=[InputRequired("Please provide a valid password.")])

class AdventureForm(FlaskForm):
    title = StringField("Title", validators=[InputRequired("Please provide a valid title.")])
    description = StringField("Description", validators=[InputRequired("Please provide a valid description.")])

class PageForm(FlaskForm):
    title = StringField("Title", validators=[InputRequired("Please provide a valid title.")])
    content = StringField("Description", validators=[InputRequired("Please provide a valid description.")])

class LinkForm(FlaskForm):
    fromId = IntegerField("FromId", validators=[InputRequired("Please provide a valid page.")])
    toId = IntegerField("ToId", validators=[InputRequired("Please provide a valid page.")])
    text = StringField("Text", validators=[InputRequired("Please provide valid text for your link.")])
