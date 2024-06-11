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
@Table(name = "requests")
public class Request {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String DUI;
    private LocalDate entry_date;
    private LocalTime checkIn_Hour;
    private LocalTime checkOut_Hour;

    @ManyToOne(fetch = FetchType.EAGER)
    private RequestStateType request_state;

    @JsonIgnore
    @ManyToMany(mappedBy = "requests")
    List<User> users;


}
