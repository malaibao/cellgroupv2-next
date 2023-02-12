// import { db } from '../../../config/db';

export default function handler(req, res) {
  // db.query('SELECT * FROM users WHERE id = $1', [req.params.id], (err, result) => {
  //     if (err) {
  //       return next(err)
  //     }
  //     res.send(result.rows[0])
  // res.status(200).json({ name: 'John Doe' });
  res.status(200).json([
    { name: "张洁慈长老", areaLeaders: ["黄惠香", "黄仁意"] },
    { name: "team leader 2", areaLeaders: ["person 1", "person 2"] },
  ]);
}
