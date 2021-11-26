from django.shortcuts import render
from rest_framework import viewsets
from booking.models import Book
from booking.serializers import BookSerializer
from django.db.models import Q
from rest_framework.decorators import action
from rest_framework.response import Response
from django.http.response import Http404


class BookViewSet(viewsets.ModelViewSet):

    queryset = Book.objects.all()
    serializer_class = BookSerializer

    @action(detail=False, methods=['GET'])
    def search(self, request, *args, **kwargs):
        search_post = request.GET.get('_name')
        if search_post or search_post == '':
            try:
                dataSet = self.queryset.filter(Q(name__icontains=search_post))
            except Book.DoesNotExist:
                raise Http404("Heroes does not exist")
        else:
            dataSet = self.queryset.all()
        heroes = self.serializer_class(dataSet, many=True)
        return Response(heroes.data)
