from flask import Blueprint, jsonify, request, make_response
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

@adventure_routes.route('/<int:adventureId>', methods=["PUT"])
def edit(adventureId):
  data = request.json
  old_horizon = Adventure.query.get(adventureId)
  if 'title' in data:
    if data['title']:
      old_horizon.title = data['title']
  if 'description' in data:
    if data['description']:
      old_horizon.description = data['description']
  if 'published' in data:
    if data['published']:
      old_horizon.published = data['published']
  db.session.commit()
  return old_horizon.to_dict()

@adventure_routes.route('/<int:adventureId>', methods=["DELETE"])
def remove(adventureId):
  old_horizon = Adventure.query.get(adventureId)
  db.session.delete(old_horizon)
  db.session.commit()
  return old_horizon.to_dict()
