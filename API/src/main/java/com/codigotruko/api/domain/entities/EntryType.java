package com.codigotruko.api.domain.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
@Entity
@Table(name = "entry_types")
public class EntryType {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "type", fetch = FetchType.LAZY)
    private List<Entry> entry;
}
