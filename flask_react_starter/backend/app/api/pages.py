from flask import Blueprint, jsonify, request, make_response
from sqlalchemy import or_
from app.models import db, Page, Link
from app.forms import PageForm
from werkzeug.datastructures import MultiDict


page_routes = Blueprint('pages', __name__)


@page_routes.route('/', methods=["POST"])
def new():
  data = MultiDict(mapping=request.json)
  # print(data)
  form = PageForm(data)
  if form.validate():
    new_scene = Page(title=data['title'], content=data['content'], adventureId=data['adventureId'], ownerId=data['ownerId'])
    db.session.add(new_scene)
    db.session.commit()
    return new_scene.to_dict()
  else:
    res = make_response({ "errors": [ form.errors[error][0] for error in form.errors ]}, 401)
    return res

@page_routes.route('/<int:pageId>', methods=["PUT"])
def edit(pageId):
  data = request.json
  old_scene = Page.query.get(pageId)
  if 'title' in data:
    if data['title']:
      old_scene.title = data['title']
  if 'content' in data:
    if data['content']:
      old_scene.content = data['content']
  db.session.commit()
  return old_scene.to_dict()


@page_routes.route('/<int:pageId>', methods=["DELETE"])
def remove(pageId):
  old_links = Link.query.filter(or_(Link.toId == pageId, Link.fromId == pageId))
  for link in old_links:
    db.session.delete(link)
  old_scene = Page.query.get(pageId)
  db.session.delete(old_scene)
  db.session.commit()
  return old_scene.to_dict()
