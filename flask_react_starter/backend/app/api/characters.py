from flask import Blueprint, jsonify, request, make_response
from app.models import db, Character
from app.forms import CharacterForm
from werkzeug.datastructures import MultiDict


character_routes = Blueprint('characters', __name__)


@character_routes.route('/', methods=["POST"])
def new():
    data = MultiDict(mapping=request.json)
    form = CharacterForm(data)
    if form.validate():
        new_persona = Character(name=data['name'],
                                strength=data['strength'],
                                dexterity=data['dexterity'],
                                constitution=data['constitution'],
                                intelligence=data['intelligence'],
                                wisdom=data['wisdom'],
                                charisma=data['charisma'],
                                armor_class=data['armor_class'],
                                max_hitpoints=data['max_hitpoints'],
                                features=data['features'],
                                actions=data['actions'],
                                ownerId=data['ownerId'],
                                )
        db.session.add(new_persona)
        db.session.commit()
        return new_persona.to_dict()
    else:
        res = make_response(
            {"errors": [form.errors[error][0] for error in form.errors]}, 401)
        return res


@character_routes.route('/<int:characterId>', methods=["PUT"])
def edit(characterId):
    data = request.json
    old_persona = Character.query.get(characterId)
    if 'name' in data:
        old_persona.title = data['name']
    if 'strength' in data:
        old_persona.title = data['strength']
    if 'dexterity' in data:
        old_persona.title = data['dexterity']
    if 'constitution' in data:
        old_persona.title = data['constitution']
    if 'intelligence' in data:
        old_persona.title = data['intelligence']
    if 'wisdom' in data:
        old_persona.title = data['wisdom']
    if 'charisma' in data:
        old_persona.title = data['charisma']
    if 'armor_class' in data:
        old_persona.title = data['armor_class']
    if 'max_hitpoints' in data:
        old_persona.title = data['max_hitpoints']
    if 'features' in data:
        old_persona.title = data['features']
    if 'actions' in data:
        old_persona.title = data['actions']
    if 'ownerId' in data:
        old_persona.title = data['ownerId']
    db.session.commit()
    return old_persona.to_dict()


@character_routes.route('/<int:characterId>', methods=["DELETE"])
def remove(characterId):
    old_persona = Character.query.get(characterId)
    db.session.delete(old_persona)
    db.session.commit()
    return old_persona.to_dict()
