from django.db import models

# Create your models here.

class Book(models.Model):
    book_categories = (
        ('FIC', 'fiction'),
        ('NFC', 'non-fiction'),
    )
    name = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    pub_date = models.CharField(max_length=100)
    category = models.CharField(max_length=3, choices=book_categories)
    image = models.URLField(max_length=255, default='')

    def __str__(self):
        return self.name