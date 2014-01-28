package com.sawert.sandbox.spring.data.rest;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;

import com.sawert.sandbox.spring.data.rest.model.Rsvp;

@Configuration
public class WebConfiguration extends RepositoryRestMvcConfiguration {

	/* (non-Javadoc)
	 * @see org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration#configureRepositoryRestConfiguration(org.springframework.data.rest.core.config.RepositoryRestConfiguration)
	 */
	@Override
	protected void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
		config.exposeIdsFor(Rsvp.class);
		super.configureRepositoryRestConfiguration(config);
	}
}
