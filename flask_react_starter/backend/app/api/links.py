from flask import Blueprint, jsonify, request, make_response
from app.models import db, Page, Link
from app.forms import LinkForm
from werkzeug.datastructures import MultiDict

link_routes = Blueprint('links', __name__)


@link_routes.route('/', methods=["POST"])
def add_link():
    data = MultiDict(mapping=request.json)
    form = LinkForm(data)
    print(form.validate())
    if form.validate():
        new_link = Link(fromId=data['fromId'], toId=data['toId'], text=data['text'], ownerId=data['ownerId'])
        db.session.add(new_link)
        db.session.commit()
        return new_link.to_dict()
    else:
        res = make_response({"errors": [form.errors[error][0] for error in form.errors]}, 401)
        return res


@link_routes.route('/<int:linkId>', methods=["DELETE"])
def remove(linkId):
  old_path = Link.query.get(linkId)
  db.session.delete(old_path)
  db.session.commit()
  return old_path.to_dict()
