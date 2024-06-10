package com.codigotruko.api.domain.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Data
@Entity
@Table(name = "visitis")
public class Visit {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    /*
    @JsonIgnore
    @ManyToOne(optional = false)
    private User user;

    @JsonIgnore
    @ManyToOne(optional = false)
    private Entry entry;

    @JsonIgnore
    @ManyToOne(optional = false)
    private House house;

     */
}
