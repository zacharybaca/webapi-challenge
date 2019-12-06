const express = require('express');

const router = express.Router();

const Projects = require('../data/helpers/projectModel.js');

router.use(express.json());

//Read
router.get('/', (req, res) => {
  Projects.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res.status(500).json({
        message: 'Error retrieving actions'
      });
    });
});

//Create
router.post('/', (req, res) => {
  Projects.insert(req.body)
    .then(action => {
      res.status(201).json(action);
    })
    .catch(error => {
      res.status(500).json({
        message: 'Error Adding Action'
      });
    });
});
//Update
router.put('/:id', (req, res) => {
  const changes = req.body;
  Projects.update(req.params.id, changes)
    .then(action => {
      if (action) {
        res.status(200).json(action);
      } else {
        res.status(404).json({
          message: 'Cannot Be Found'
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: 'Error Updating'
      });
    });
});
//Delete
router.delete('/:id', (req, res) => {
  Projects.remove(req.params.id)
    .then(records => {
      if (records > 0) {
        res.status(200).json(records);
      } else {
        res.status(404).json({
          message: 'Record Not Found'
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: 'Error Removing Record'
      });
    });
});

//Project Actions
router.get('/:id/actions', (req, res) => {
  Projects.getProjectActions(req.params.id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: 'Error'
      });
    });
});

module.exports = router;
