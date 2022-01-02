# Generated by Django 3.2.9 on 2022-01-02 06:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booking', '0007_alter_book_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='describe',
            field=models.CharField(default='', max_length=999),
        ),
        migrations.AlterField(
            model_name='book',
            name='category',
            field=models.CharField(choices=[('FIC', 'Fiction'), ('DOC', 'Documentary'), ('SCI', 'Science'), ('HIS', 'History'), ('TEC', 'Technology')], max_length=3),
        ),
    ]