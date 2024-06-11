package com.codigotruko.api.domain.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
@Entity
@Table(name = "houses")
public class House {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String house_name;
    private Integer house_number;
    private String house_address;
    private Integer house_resident_number;

    @JsonIgnore
    @OneToMany(mappedBy = "house", fetch = FetchType.LAZY)
    private List<User> residents;

    @JsonIgnore
    @OneToMany(mappedBy = "house", fetch = FetchType.LAZY)
    private List<Entry> entries;

}
