# Generated by Django 3.2.9 on 2021-11-25 12:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booking', '0003_alter_book_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pic',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.CharField(max_length=100)),
            ],
        ),
    ]
