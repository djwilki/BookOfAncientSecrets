from flask import Blueprint, jsonify, request, make_response
from app.models import db, Character
from app.forms import CharacterForm
from werkzeug.datastructures import MultiDict


character_routes = Blueprint('characters', __name__)

@character_routes.route('/', methods=["POST"])
def new():
    data = MultiDict(mapping=request.json)
    form = CharacterForm(data)
    print(form.validate())
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
                                images=data['images'],
                                ownerId=data['ownerId'],
                                )
        db.session.add(new_persona)
        db.session.commit()
        return new_persona.to_dict()
    else:
        res = make_response(
            {"errors": [form.errors[error][0] for error in form.errors]}, 401)
        print(form.errors)
        return res


@character_routes.route('/<int:characterId>', methods=["PUT"])
def edit(characterId):
    data = request.json
    old_persona = Character.query.get(characterId)
    if 'name' in data:
        old_persona.name = data['name']
    if 'strength' in data:
        old_persona.strength = data['strength']
    if 'dexterity' in data:
        old_persona.dexterity = data['dexterity']
    if 'constitution' in data:
        old_persona.constitution = data['constitution']
    if 'intelligence' in data:
        old_persona.intelligence = data['intelligence']
    if 'wisdom' in data:
        old_persona.wisdom = data['wisdom']
    if 'charisma' in data:
        old_persona.charisma = data['charisma']
    if 'armor_class' in data:
        old_persona.armor_class = data['armor_class']
    if 'max_hitpoints' in data:
        old_persona.max_hitpoints = data['max_hitpoints']
    if 'features' in data:
        old_persona.features = data['features']
    if 'actions' in data:
        old_persona.actions = data['actions']
    if 'images' in data:
        old_persona.image
    if 'ownerId' in data:
        old_persona.ownerId = data['ownerId']
    db.session.commit()
    return old_persona.to_dict()


@character_routes.route('/<int:characterId>', methods=["DELETE"])
def remove(characterId):
    old_persona = Character.query.get(characterId)
    db.session.delete(old_persona)
    db.session.commit()
    return old_persona.to_dict()
