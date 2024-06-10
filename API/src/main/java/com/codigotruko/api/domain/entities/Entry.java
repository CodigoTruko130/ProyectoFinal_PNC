package com.codigotruko.api.domain.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.UUID;

@Data
@Entity
@Table(name = "entry")
public class Entry {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private LocalDate estimatedDateEntry;
    private LocalDate date_entry;
    private String commentary;
    private String DUI;
    private String headline;



    //@ManyToOne(fetch = FetchType.EAGER)
    //private User visitor;


    //@ManyToOne(fetch = FetchType.EAGER)
    //private House house;

}

