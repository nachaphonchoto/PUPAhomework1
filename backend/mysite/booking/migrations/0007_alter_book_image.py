# Generated by Django 3.2.9 on 2021-11-28 15:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booking', '0006_auto_20211126_2300'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='image',
            field=models.CharField(default='', max_length=255),
        ),
    ]