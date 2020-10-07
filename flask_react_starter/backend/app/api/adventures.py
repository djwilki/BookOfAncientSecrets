from flask import Blueprint, jsonify, request
from app.models import db, Adventure
from app.forms import AdventureForm
from werkzeug.datastructures import MultiDict


adventure_routes = Blueprint('adventures', __name__)

@adventure_routes.route('/', methods=["POST"])
def new():
  data = MultiDict(mapping=request.json)
  form = AdventureForm(data)
  if form.validate():
    new_horizon = Adventure(title=data['title'], description=data['description'], published=data['published'], ownerId=data['ownerId'])
    db.session.add(new_horizon)
    db.session.commit()
    return new_horizon.to_dict()
  else:
    res = make_response({ "errors": [ form.errors[error][0] for error in form.errors ]}, 401)
    return res

@adventure_routes.route('/<int:ownerId>', methods=["PUT"])
def edit():
  data = request.json
  old_horizon = Adventure.query.get(ownerId)
  if data['title']:
      old_horizon.title = data['title']
  if data['description']:
      old_horizon.title = data['description']
  if data['published']:
      old_horizon.title = data['published']
  db.session.commit()
  return old_horizon.to_dict()
