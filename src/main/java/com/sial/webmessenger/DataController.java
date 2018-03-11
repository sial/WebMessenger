package com.sial.webmessenger;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DataController {

    private static final Logger LOG = Logger.getLogger(DataController.class);

    @RequestMapping("/")
    public String index() {
        LOG.warn("Return index");
        return "index.html";
    }
}