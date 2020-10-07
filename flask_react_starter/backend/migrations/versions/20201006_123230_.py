"""empty message

Revision ID: 6014197dcb0b
Revises: 6327ed0403e8
Create Date: 2020-10-06 12:32:30.608265

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6014197dcb0b'
down_revision = '6327ed0403e8'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('password', sa.String(length=255), nullable=False))
    op.create_unique_constraint(None, 'users', ['password'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'users', type_='unique')
    op.drop_column('users', 'password')
    # ### end Alembic commands ###