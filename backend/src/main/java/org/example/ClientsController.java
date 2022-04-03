package org.example;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/clients")
public class ClientsController {

    Storage storage;

    public ClientsController(Storage storage) {
        this.storage = storage;
    }

    @GetMapping
    public List<Client> getAll() {
        return storage.clients;
    }

    @PostMapping
    public void addClient(@RequestBody Client client) {
        storage.clients.add(client);
    }
}
