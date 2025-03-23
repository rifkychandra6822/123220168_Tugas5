import { where } from "sequelize";
import Notes from "../models/usermodel.js";

export const getNotes = async (req, res) => {
    try {
        const response = await Notes.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getNotesById = async (req, res) => {
    try {
        const response = await Notes.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const createuser = async (req, res) => {
    try {
        await Notes.create(req.body);
        res.status(201).json({ msg: "Note Created" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const updateuser = async (req, res) => {
    try {
        await Notes.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Note Updated" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const deleteuser = async (req, res) => {
    try {
        await Notes.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Note Deleted" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};