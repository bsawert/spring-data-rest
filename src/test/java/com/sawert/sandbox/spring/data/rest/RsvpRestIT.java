package com.sawert.sandbox.spring.data.rest;

import static org.junit.Assert.assertNotNull;

import java.net.URI;

import org.junit.Test;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.hateoas.Resource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.web.client.RestTemplate;

import com.sawert.sandbox.spring.data.rest.model.Rsvp;

public class RsvpRestIT {
    private final RestTemplate restTemplate = new RestTemplate();
    private final String rsvpsUrl = "http://localhost:8080/spring-data-rest-1.0/rsvps/";

    @Test
    public void testCreateRsvp() throws Exception {
    	HttpHeaders headers = new HttpHeaders();
    	headers.setContentType(MediaType.APPLICATION_JSON);
    	HttpEntity<String> entity = new HttpEntity<String>(sampleRsvp(), headers);
        final URI rsvpUri = restTemplate.postForLocation(rsvpsUrl, entity);

        Resource<Rsvp> rsvp = getRsvp(rsvpUri);
        assertNotNull(rsvp);

        System.out.println(rsvp);
    }

    private String sampleRsvp() {
        return "{\"name\":\"John Smith\", \"email\":\"jsmith@yahoo.com\", \"guests\":2, \"attend\":true}";
    }

    private Resource<Rsvp> getRsvp(URI uri) {
        return restTemplate.exchange(uri, HttpMethod.GET, null, new ParameterizedTypeReference<Resource<Rsvp>>() {
        }).getBody();
    }
}
