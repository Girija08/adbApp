package com.verizon.bookstoreapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.verizon.bookstoreapp.dao.BookDao;
import com.verizon.bookstoreapp.model.Book;

@Service
public class BookServiceImpl implements BookService{
	@Autowired
	
	private BookDao bookDao;
	@CachePut(value="books",key="#book.bcode")
	@Override	
	public Book addBook(Book book) {		
		return bookDao.addBook(book);	
		}	
	@Override	
	@CachePut(value="books",key="#book.bcode")
	public Book updateBook(Book book) 
	{		
		return bookDao.updateBook(book);	
		}	
	@Cacheable(value="books",key="#bcode")
	@Override	
	public Book getBookById(int bcode) {		
		return bookDao.getBookById(bcode);	
		}	
	@CacheEvict(value="books",key="#bcode")
	@Override	
	
	public boolean deleteBookById(int bcode) {		
		return bookDao.deleteBookById(bcode);	
		}	
	@Cacheable("books")
	@Override	
	public List<Book> getAllBooks() {		
		return bookDao.getAllBooks();	
	}
}

