import { db } from '../../../config/db';

export default function handler(req, res) {
  // db.query('SELECT * FROM users WHERE id = $1', [req.params.id], (err, result) => {
  //     if (err) {
  //       return next(err)
  //     }
  //     res.send(result.rows[0])
  res.status(200).json({ name: 'John Doe' });
}
