package com.verizon.bookstoreapp.service;

import java.util.List;

import com.verizon.bookstoreapp.model.Book;

public interface BookService {
	Book addBook(Book book);
	Book updateBook(Book book);
	Book getBookById(int bcode);
	boolean deleteBookById(int bcode);
	List<Book> getAllBooks();


}
