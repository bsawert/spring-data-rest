package com.sawert.sandbox.spring.data.rest.repo;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RestResource;

import com.sawert.sandbox.spring.data.rest.model.Rsvp;

@RestResource(path="rsvps", rel="rsvps")
public interface RsvpRepository extends PagingAndSortingRepository<Rsvp, Long> {
}
