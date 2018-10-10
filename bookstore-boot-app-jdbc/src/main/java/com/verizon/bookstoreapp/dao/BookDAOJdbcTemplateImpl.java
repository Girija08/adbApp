package com.verizon.bookstoreapp.dao;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.verizon.bookstoreapp.model.Book;

@Repository
public class BookDAOJdbcTemplateImpl implements BookDao {
	private JdbcTemplate jdbcTemplate;

	public BookDAOJdbcTemplateImpl(DataSource dataSource) {
		this.jdbcTemplate = new JdbcTemplate(dataSource);
		// TODO Auto-generated constructor stub
	}

	@Override
	public Book addBook(Book book) {
		int count = jdbcTemplate.update(IQueryMapper.INS_BOOK_QRY, book.getBcode(), book.getTitle(), book.getPrice(),
				book.getCategory(), book.getType()

		);
		if (count < 1) {
			book = null;
		}
		return book;
	}

	@Override
	public Book updateBook(Book book) {
		int count = jdbcTemplate.update(IQueryMapper.UPDATE_BOOK_QRY, book.getTitle(), book.getPrice(), book.getCategory(),
				book.getType(), book.getBcode());
		if (count < 1) {
			book = null;
		}
		return book;
	}

	@Override
	public Book getBookById(int bcode) {
		List<Book> books = jdbcTemplate.query(IQueryMapper.GET_BOOK_QRY, new Object[] { bcode }, new BookRowMapper());

		Book book = null;
		if (books != null && books.size() == 1) {
			book = books.get(0);
		}
		return book;
	}

	@Override
	public boolean deleteBookById(int bcode) {
		boolean isDeleted = false;
		int count = jdbcTemplate.update(IQueryMapper.DEL_BOOK_QRY, bcode);

		if (count >= 1) {
			isDeleted = true;
		}
		return isDeleted;
	}

	@Override
	public List<Book> getAllBooks() {
		List<Book> books = jdbcTemplate.query(IQueryMapper.GET_ALL_BOOKS_QRY, new BookRowMapper());
		return books;

	}

}
