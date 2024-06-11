package com.codigotruko.api.domain.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.UUID;

@Data
@Entity
@Table(name = "entry_request")
public class EntryRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String DUI;
    private LocalDate entry_date;
    private LocalTime checkIn_Hour;
    private LocalTime checkOut_Hour;

/*
    @JsonIgnore
    @ManyToMany(mappedBy = "entry_request")
    List<User> users;


 */
}
