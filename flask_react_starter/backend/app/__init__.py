import os
from flask import Flask, render_template, request, session
from flask_cors import CORS
from flask_wtf.csrf import CSRFProtect, generate_csrf
from app.auth import login_manager
from flask_migrate import Migrate

from .models import db, User
from .api.session import session
from .api.user_routes import user_routes
from .api.adventures import adventure_routes
from .api.pages import page_routes
from .api.links import link_routes
from .api.characters import character_routes

from .config import Config

app = Flask(__name__)
app.config.from_object(Config)
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(session, url_prefix='/api/session')
app.register_blueprint(adventure_routes, url_prefix='/api/adventures')
app.register_blueprint(page_routes, url_prefix='/api/pages')
app.register_blueprint(link_routes, url_prefix='/api/links')
app.register_blueprint(character_routes, url_prefix='/api/characters')
db.init_app(app)
login_manager.init_app(app)
Migrate(app, db)

## Application Security
CORS(app)
@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
        generate_csrf(),
        secure=True if os.environ.get('FLASK_ENV') else False,
        samesite='Strict' if os.environ.get('FLASK_ENV') else None,
        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        print("favicon route_____")
        return app.send_static_file('favicon.ico')
    print("index route_____")
    return app.send_static_file('index.html')
