// <section className="py-24 bg-black/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Meet Our{" "}
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
//                 Innovators
//               </span>
//             </h2>
//             <p className="text-lg text-slate-400 max-w-3xl mx-auto">
//               The brilliant minds behind our success, dedicated to pushing the
//               boundaries of technology.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//             {team.map((member, index) => (
//               <motion.div
//                 key={index}
//                 className="text-center bg-black/20 p-6 rounded-2xl border border-white/10 group relative"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.2, duration: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <Image
//                   src={member.avatar}
//                   alt={member.name}
//                   width={240}
//                   height={240}
//                   className="w-64 h-64 rounded-full mx-auto mb-4 border-4 border-purple-500/50 shadow-lg transform group-hover:scale-105 transition-transform duration-300"
//                   unoptimized
//                 />
//                 <h3 className="text-lg font-semibold text-white mt-4">
//                   {member.name}
//                 </h3>
//                 <p className="text-blue-400">{member.role}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>