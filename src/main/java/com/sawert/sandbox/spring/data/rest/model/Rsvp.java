package com.sawert.sandbox.spring.data.rest.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Rsvp {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String name;
    private String email;
    private Integer guests;
    private boolean attend;
    
    /**
     * Default constructor
     */
    public Rsvp() {
    }
    
    /**
     * Parameter constructor
     */
    public Rsvp(String name, String email, Integer guests, boolean attend) {
    	this.name = name;
    	this.email = email;
    	this.guests = guests;
    	this.attend = attend;
    }
    
	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}
	
	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}
	
	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}
	
	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}
	
	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}
	
	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}
	
	/**
	 * @return the guests
	 */
	public Integer getGuests() {
		return guests;
	}
	
	/**
	 * @param guests the guests to set
	 */
	public void setGuests(Integer guests) {
		this.guests = guests;
	}
		
	/**
	 * @return the attend
	 */
	public boolean isAttend() {
		return attend;
	}

	/**
	 * @param attend the attend to set
	 */
	public void setAttend(boolean attend) {
		this.attend = attend;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + ((guests == null) ? 0 : guests.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + (attend ? 1231 : 1237);
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		return result;
	}
	
	/* (non-Javadoc)
	 * @see java.lang.Object#equals(java.lang.Object)
	 */
	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (obj == null) {
			return false;
		}
		if (!(obj instanceof Rsvp)) {
			return false;
		}
		Rsvp other = (Rsvp) obj;
		if (email == null) {
			if (other.email != null) {
				return false;
			}
		} else if (!email.equals(other.email)) {
			return false;
		}
		if (guests == null) {
			if (other.guests != null) {
				return false;
			}
		} else if (!guests.equals(other.guests)) {
			return false;
		}
		if (id == null) {
			if (other.id != null) {
				return false;
			}
		} else if (!id.equals(other.id)) {
			return false;
		}
		if (attend != other.attend) {
			return false;
		}
		if (name == null) {
			if (other.name != null) {
				return false;
			}
		} else if (!name.equals(other.name)) {
			return false;
		}
		return true;
	}

}
